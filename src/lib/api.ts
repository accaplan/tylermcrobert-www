import { client, previewClient } from 'lib/sanity'
import { CaseStudyType } from 'types'

export const getClient = (isPreview: boolean) =>
  isPreview ? previewClient : client

type ApiRequestInput = { handle: string; isPreview: boolean }

/**
 * Class to handle managed preview requests to Sanity Studio
 */

class ApiRequest<T> {
  isPreview: boolean

  /**
   * Sanity Api Request
   * @param isPreview {boolean} fetch from drafts
   */

  constructor(isPreview: boolean) {
    this.isPreview = isPreview
  }

  /**
   * Fetch Sanity document based on preview
   */

  async fetchQuery(query: string): Promise<T> {
    return getClient(this.isPreview)
      .fetch(query)
      .then(res => {
        return (
          res.filter((item: any) => {
            const isDraft = item._id.startsWith('drafts.')
            return this.isPreview ? isDraft : !isDraft
          })[0] || res[0]
        )
      })
  }
}

/**
 * Requests doc by handle
 * @param input Request Input
 */

class _HandleRequest<T> extends ApiRequest<T> {
  handle: string
  query: string

  constructor({ handle, isPreview }: ApiRequestInput) {
    super(isPreview)
    this.handle = handle
    this.query = ''
  }

  async fetch() {
    return this.fetchQuery(this.query)
  }
}

export class CaseStudyRequest extends _HandleRequest<CaseStudyType> {
  constructor(props: ApiRequestInput) {
    super(props)
    this.query = `
      *[slug.current == '${props.handle}' && _type == "caseStudy"]
    `
  }
}

export const getCaseStudies = async (): Promise<CaseStudyType[]> => {
  return getClient(true).fetch(`*[_type == 'caseStudy']`)
}