import { VisibilityFilters } from './filterSelector/redux/actions';

const gameList = {
  '0': {
    title: 'Name 1',
    status: VisibilityFilters.SHOW_PENDING,
  },
  '1': {
    title: 'Name 2',
    status: VisibilityFilters.SHOW_PLAYING,
  },
  '2': {
    title: 'Name 3',
    status: VisibilityFilters.SHOW_FINISHED,
  },
  '3': {
    title: 'Name 4',
    status: VisibilityFilters.SHOW_PENDING,
  },
  '4': {
    title: 'Name 5',
    status: VisibilityFilters.SHOW_FINISHED,
  },
};

export default gameList;
