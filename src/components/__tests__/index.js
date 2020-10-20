import React from "react"
import renderer from "react-test-renderer"
import { StaticQuery } from "gatsby"
import Index from "../../pages/index"

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `Default Starter`,
        },
      },
    })
  )
})

describe("Index", () => {
  it("renders correctly", () => {
    const data = {
      site: {
        siteMetadata: {
          author: "Mika Nelson",
        },
      },
    }

    const tree = renderer.create(<Index data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})