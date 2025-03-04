export const sortByDate = <T extends { date: number | string }>(posts: Array<T>): Array<T> => {
  if (!Array.isArray(posts)) {
    console.error('sortByDate: posts is not an array')
    return []
  }

  return posts.sort((a, b) => {
    if (!a.date && !b.date) {
      return 0
    }
    if (!a.date) {
      return 1
    }
    if (!b.date) {
      return -1
    }

    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}
