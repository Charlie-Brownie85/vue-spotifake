import { shallowMount, enableAutoDestroy } from '@vue/test-utils'
import Toaster from '@/components/Toaster.vue'

enableAutoDestroy(afterEach)

describe('Toaster', () => {
  let wrapper
  const msg = 'Hey there! I\'m a toaster!'

  beforeEach(() => {
    wrapper = shallowMount(Toaster, {
      slots: { 
        default: msg
       }
    })
  })

  it('matches the snapshot', () => {
    
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders proper message when passed as slot', () => {
    const msg = 'Hey there! I\'m a toaster!'
    expect(wrapper.text()).toMatch(msg)
  })

})
