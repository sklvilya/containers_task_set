import Team from '../index';

describe('Check class Team', () => {
  const wizard = { type: 'wizard' };
  const demon = { type: 'demon' };
  const skelet = { type: 'skelet' };

  test('Check method add', () => {
    const team = new Team();
    const expectedHero = [{ type: 'wizard' }];
    team.add(wizard);
    expect(team.toArray()).toEqual(expectedHero);
  });
  test('Check method addAll', () => {
    const team = new Team();
    const expectedHero = [{ type: 'wizard' }, { type: 'demon' }, { type: 'skelet' }];
    team.addAll(wizard, demon, skelet);
    expect(team.toArray()).toEqual(expectedHero);
  });
  test('Check method toArray', () => {
    const team = new Team();
    team.addAll(wizard, demon, skelet);
    const expectedHero = [{ type: 'wizard' }, { type: 'demon' }, { type: 'skelet' }];
    expect(team.toArray()).toEqual(expectedHero);
  });
});
