import React from 'react'
import renderer from 'react-test-renderer'

import IndexPage from '../../pages/index'

describe('IndexPage', () => {
  it('renders correctly', () => {
    const location = {
      pathname: '/',
    }

    const data = {
      allTalkJson: {
        edges: [
          {
            node: {
              description:
                "Drawing from some of the most pivotal points in his life, Steve Jobs, chief executive officer and co-founder of Apple Computer and of Pixar Animation Studios, urged graduates to pursue their dreams and see the opportunities in life's setbacks.",
              meta: {
                duration: 'PT15M5S',
              },
              presenter: {
                name: 'Steve Jobs',
              },
              source: {
                id: 'UF8uR6Z6KLc',
                provider: 'youtube',
              },
              slug: 'steve-jobs-stanford-commencement-address',
              tag: [
                'Stanford University',
                'Educational',
                'Keynote',
                'Inspiring',
                'Commencement Speech',
              ],
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/UF8uR6Z6KLc/default.jpg',
                  height: 90,
                  width: 120,
                },
              },
              title: "Steve Jobs' 2005 Stanford Commencement Address",
            },
          },
        ],
      },
    }

    const tree = renderer
      .create(<IndexPage location={location} data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
