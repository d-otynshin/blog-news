import { cn } from 'shared/lib/cn'

describe('classNames', () => {
  it('with only one parameter', () => {
    expect(cn('testClass')).toBe('testClass');
  })

  it('with several parameters', () => {
    const expected = 'testClass testClass2 testClass3';

    expect(cn('testClass', {}, ['testClass2', 'testClass3'])).toBe(expected);
  })

  it('with mods and several parameters', () => {
    const expected = 'testClass testClass2 testClass3 hovered scrollable';

    expect(cn(
      'testClass',
      { hovered: true, scrollable: true },
      ['testClass2', 'testClass3']
    ))
      .toBe(expected);
  })

  it('with several parameters and one false mode', () => {
    const expected = 'testClass testClass2 testClass3 hovered';

    expect(cn(
      'testClass',
      { hovered: true, scrollable: false },
      ['testClass2', 'testClass3']
    ))
      .toBe(expected);
  })

  it('with several parameters and one undefined mode', () => {
    const expected = 'testClass testClass2 testClass3 hovered';

    expect(cn(
      'testClass',
      { hovered: true, scrollable: undefined },
      ['testClass2', 'testClass3']
    ))
      .toBe(expected);
  })

  it('with modes only', () => {
    const expected = 'hovered scrollable';

    expect(cn(
      null,
      { hovered: true, scrollable: true },
      []
    ))
      .toBe(expected);
  })
});
