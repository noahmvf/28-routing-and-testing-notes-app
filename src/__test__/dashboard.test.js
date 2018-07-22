import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from '../components/dashboard/dashboard';

configure({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  let mountedDashboard;
  beforeEach(() => {
    mountedDashboard = mount(<Dashboard/>);
  });

  afterEach(() => {
    mountedDashboard.unmount();
  });

  test('Test for initial state', () => {
    expect(mountedDashboard.state('notes')).toEqual([]);
  });

  test('Adding a new note to the state', () => {
    const mockNotes = [{ title: 'fake', description: 'fake description', _id: '1234' }];
    mountedDashboard.setState({ notes: mockNotes });
    expect(mountedDashboard.state('notes')).toEqual(mockNotes);
    expect(mountedDashboard.state('notes')).toHaveLength(1);
    expect(mountedDashboard.find('p').text()).toEqual('fake description');
  });
});
