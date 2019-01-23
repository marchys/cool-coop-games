import { VisibilityFilters } from './filterSelector/redux/actions';

const gameList = {
  '0': {
    title: 'Wizard of Legend',
    status: VisibilityFilters.SHOW_PENDING,
    steamId: '445980',
  },
  '1': {
    title: 'Destiny 2',
    status: VisibilityFilters.SHOW_PLAYING,
  },
  '2': {
    title: 'The Division',
    status: VisibilityFilters.SHOW_PENDING,
  },
  '3': {
    title: 'Divinity 2',
    status: VisibilityFilters.SHOW_PENDING,
    steamId: '435150',
  },
  '4': {
    title: 'Binding of Isaac',
    status: VisibilityFilters.SHOW_PENDING,
    steamId: '2405',
  },
};

export default gameList;
