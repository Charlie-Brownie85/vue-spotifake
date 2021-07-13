import { shallowMount, enableAutoDestroy } from '@vue/test-utils'
const { testData } = require('./data/test-data')
import SpotifyCard from '@/components/SpotifyCard'
import sinon from 'sinon'

const artist = testData.results.artists.items[0]
const track = testData.results.tracks.items[1]
const album = testData.results.albums.items[2]

enableAutoDestroy(afterEach)

describe('SpotifyCard', () => {
  it('matches the snapshot', () => {
    const wrapper = shallowMount(SpotifyCard, {
      propsData: {
        cardInfo: artist
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Album card has cover picture, album and artist names', () => {
    const wrapper = shallowMount(SpotifyCard, {
      propsData: {
        cardInfo: album
      }
    })
    expect(wrapper.vm.cardType).toMatch(album.type)
    expect(wrapper.vm.cardTitle).toMatch(album.name)
    expect(wrapper.vm.cardSubtitle).toMatch(album.artists[0].name)
    expect(wrapper.vm.imageURL).toMatch(album.images[1].url)
  })

  it('Artist card has artist picture, name and number of followers', () => {
    const wrapper = shallowMount(SpotifyCard, {
      propsData: {
        cardInfo: artist
      }
    })
    expect(wrapper.vm.cardType).toMatch(artist.type)
    expect(wrapper.vm.cardTitle).toMatch(artist.name)
    expect(wrapper.vm.cardSubtitle).toMatch(
      `${artist.followers.total} followers`
    )
    expect(wrapper.vm.imageURL).toMatch(artist.images[1].url)
  })

  it('Track card has album picture, name and artist name', () => {
    const wrapper = shallowMount(SpotifyCard, {
      propsData: {
        cardInfo: track
      }
    })
    expect(wrapper.vm.cardType).toMatch(track.type)
    expect(wrapper.vm.cardTitle).toMatch(track.name)
    expect(wrapper.vm.cardSubtitle).toMatch(track.artists[0].name)
    expect(wrapper.vm.imageURL).toMatch(track.album.images[1].url)
  })

  /** Ignore this test for the moment as it requires complex Vuex instance and action mocking */
  // it('calls the "displayToaster" function when card clicked', async () => {
  //   const spy = sinon.spy()

  //   const wrapper = shallowMount(SpotifyCard, {
  //     propsData: {
  //       cardInfo: track,
  //       handleCardClick: spy
  //     }
  //   })

  //   await wrapper.trigger('click')
  //   spy.should.have.been.calledOnce
  // })
})
