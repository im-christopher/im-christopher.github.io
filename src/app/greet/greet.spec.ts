import { greet } from './greet';

describe('greet', () => {  // greet suite

  it('should include the name in the message', () => {
    expect(greet('adsoft')).toContain('adsoft');
  })

})
