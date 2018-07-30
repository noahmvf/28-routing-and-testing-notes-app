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
    expect(mountedDashboard.state('expenses')).toEqual([]);
  });

  test('Adding a new expense to the state', () => {
    const mockExpenses = [{ name: 'fake', description: 'fake description', _id: '1234' }];
    mountedDashboard.setState({ expenses: mockExpenses });
    expect(mountedDashboard.state('expenses')).toEqual(mockExpenses);
    expect(mountedDashboard.state('expenses')).toHaveLength(1);
  });
});
