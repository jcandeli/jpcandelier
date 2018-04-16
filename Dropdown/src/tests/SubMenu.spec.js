/* global describe, it, beforeEach */
/* eslint no-unused-expressions: "off" */
import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';

import { SubMenu } from '../index';

chai.use(chaiEnzyme());

describe('(Component) SubMenu', () => {
    it('renders without errors', () => {
        const rendered = shallow(<SubMenu />);
        expect(rendered.length).to.eq(1);
    });
});
