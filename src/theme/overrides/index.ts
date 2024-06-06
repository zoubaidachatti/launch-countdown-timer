import { Components, Theme } from '@mui/material';
import Alert from './Alert';
import Button from './Button';
import Card from './Card';
import Checkbox from './Checkbox';
import DateCalendar from './DateCalendar';
import InputBase from './InputBase';
import LinearProgress from './LinearProgress';
import List from './List';
import Menu from './Menu';
import OutlinedInput from './OutlinedInput';
import Pagination from './Pagination';
import Paper from './Paper';
import Radio from './Radio';
import Tab from './Tab';
import Tabs from './Tabs';
import Tooltip from './Tooltip';

export default function ComponentsOverrides(theme: Theme): Components {
  return Object.assign(
    Alert(theme),
    Card(theme),
    Tooltip(theme),
    Button(theme),
    Tabs(theme),
    Tab(theme),
    OutlinedInput(theme),
    DateCalendar(theme),
    InputBase(theme),
    LinearProgress(),
    List(theme),
    Menu(theme),
    Paper(),
    Checkbox(),
    Radio(),
    Pagination(theme),
  );
}
