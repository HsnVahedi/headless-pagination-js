import {
  getPagination,
  DOTS,
  PaginationParameters,
} from '../src/index'

test(
  '[1, (2), 3, ..., 10], pageSize=1, siblingCount=1',
  () => {
    const parameters: PaginationParameters = {
      currentPage: 2,
      totalCount: 10,
      pageSize: 1,
      siblingCount: 1,
    }
    const paginated = getPagination(parameters)
    expect(
      paginated.toString()
    ).toBe([
      1, 2, 3, DOTS, 10
    ].toString())
  }
)

test(
  '[1, 2, 3, (4), 5, 6 ..., 10], pageSize=1, siblingCount=2',
  () => {
    const parameters: PaginationParameters = {
      currentPage: 4,
      totalCount: 10,
      pageSize: 1,
      siblingCount: 2,
    }
    const paginated = getPagination(parameters)
    expect(
      paginated.toString()
    ).toBe([
      1, 2, 3, 4, 5, 6, DOTS, 10
    ].toString())
  }
)

test(
  '[1, (2), ..., 4], pageSize=1, siblingCount=0',
  () => {
    const parameters: PaginationParameters = {
      currentPage: 2,
      totalCount: 4,
      pageSize: 1,
      siblingCount: 0,
    }
    const paginated = getPagination(parameters)
    expect(
      paginated.toString()
    ).toBe([
      1, 2, DOTS, 4
    ].toString())
  }
)

test(
  '[1, (2), ..., 4], pageSize=11, siblingCount=0',
  () => {
    const parameters: PaginationParameters = {
      currentPage: 2,
      totalCount: 43,
      pageSize: 11,
      siblingCount: 0,
    }
    const paginated = getPagination(parameters)
    expect(
      paginated.toString()
    ).toBe([
      1, 2, DOTS, 4
    ].toString())
  }
)

test(
  '[1, (2), 3, 4], pageSize=11, siblingCount=5',
  () => {
    const parameters: PaginationParameters = {
      currentPage: 2,
      totalCount: 43,
      pageSize: 11,
      siblingCount: 5,
    }
    const paginated = getPagination(parameters)
    expect(
      paginated.toString()
    ).toBe([
      1, 2, 3, 4
    ].toString())
  }
)

test(
  '[1, (2), 3, 4], pageSize=11, siblingCount=50',
  () => {
    const parameters: PaginationParameters = {
      currentPage: 2,
      totalCount: 43,
      pageSize: 11,
      siblingCount: 50,
    }
    const paginated = getPagination(parameters)
    expect(
      paginated.toString()
    ).toBe([
      1, 2, 3, 4
    ].toString())
  }
)

test(
  '[(1), 2, 3, 4], pageSize=11, siblingCount=50',
  () => {
    const parameters: PaginationParameters = {
      currentPage: 1,
      totalCount: 43,
      pageSize: 11,
      siblingCount: 50,
    }
    const paginated = getPagination(parameters)
    expect(
      paginated.toString()
    ).toBe([
      1, 2, 3, 4
    ].toString())
  }
)

test(
  '[(1), ..., 4], pageSize=11, siblingCount=0',
  () => {
    const parameters: PaginationParameters = {
      currentPage: 1,
      totalCount: 43,
      pageSize: 11,
      siblingCount: 0,
    }
    const paginated = getPagination(parameters)
    expect(
      paginated.toString()
    ).toBe([
      1, DOTS, 4
    ].toString())
  }
)

test(
  '[1, ..., (4)], pageSize=7, siblingCount=0',
  () => {
    const parameters: PaginationParameters = {
      currentPage: 4,
      totalCount: 28,
      pageSize: 7,
      siblingCount: 0,
    }
    const paginated = getPagination(parameters)
    expect(
      paginated.toString()
    ).toBe([
      1, DOTS, 4
    ].toString())
  }
)