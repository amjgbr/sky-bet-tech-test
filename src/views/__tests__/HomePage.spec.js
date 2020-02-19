import React from 'react';
import { render } from '@testing-library/react';
import { HomePage } from '../HomePage';
import {
    BrowserRouter as Router,
  } from "react-router-dom";

describe('Homepage component', () => {

  let component;

  beforeEach(() => {
    component = render(
        <Router>
            <HomePage />
        </Router>
    );
  });

  test('should render the grid wrapper', () => {
    const { getByTestId } = component;
    const homepageGrid = getByTestId('c-homepage-grid');
    expect(homepageGrid).toBeInTheDocument();
  });

  test('should render the paper component', () => {
    const { getByTestId } = component;
    const homepagePaper = getByTestId('c-homepage-paper');
    expect(homepagePaper).toBeInTheDocument();
  });

  test('should render the title of Sports', () => {
    const { getByTestId } = component;
    const homepageTitle = getByTestId('c-homepage-title');
    expect(homepageTitle).toBeInTheDocument();
    expect(homepageTitle).toHaveTextContent('Sports');
  });

  test('should render the list of sports', () => {
    const { getByTestId } = component;
    const homepageList = getByTestId('c-homepage-sport-list');
    expect(homepageList).toBeInTheDocument();
    expect(homepageList.children.length).toBe(7);
    expect(homepageList.children[0]).toHaveTextContent('Football');
  });
})
