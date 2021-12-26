const range = (start: number, end: number): number[] => {
  const length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

export const DOTS = 'DOTS'

export type PaginationParameters = {
  currentPage: number
  totalCount: number
  pageSize: number
  siblingCount?: number
}

export const getPagination = ({
  currentPage,
  totalCount,
  pageSize,
  siblingCount = 1,
}: PaginationParameters): (number | string)[] => {
  const totalPageCount = Math.ceil(totalCount / pageSize)
  const leftSiblings = range(
    Math.max(1, currentPage - siblingCount),
    Math.max(1, currentPage - 1)
  )
  const rightSiblings = range(
    Math.min(totalPageCount, currentPage + 1),
    Math.min(totalPageCount, currentPage + siblingCount)
  )
  const siblings: number[] = Array.from(
    new Set([...leftSiblings, currentPage, ...rightSiblings])
  )
  let result: (number | string)[] = []
  if (siblings[0] != 1) {
    result = [1]
  }
  if (siblings[0] > 2) {
    result = [...result, DOTS]
  }
  result = [...result, ...siblings]
  if (siblings[siblings.length - 1] < totalPageCount - 1) {
    result = [...result, DOTS]
  }
  if (siblings[siblings.length - 1] != totalPageCount) {
    result = [...result, totalPageCount]
  }
  return result
}
