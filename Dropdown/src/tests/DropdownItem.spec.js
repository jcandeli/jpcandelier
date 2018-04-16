/* global describe, it, beforeEach */
/* eslint no-unused-expressions: "off" */
import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { DropdownItem } from '../index';

chai.use(chaiEnzyme());

describe('(Component) DropdownItem', () => {
    it('renders without errors', () => {
        const rendered = shallow(<DropdownItem />);
        expect(rendered.length).to.eq(1);
    });

    it('calls props.updateSelect() when clicked', () => {
        const updateSelect = sinon.spy();
        const rendered = shallow(<DropdownItem updateSelect={updateSelect} />);
        rendered.simulate('click');
        expect(updateSelect.calledOnce).to.eq(true);
    });

    it('calls props.updateSelect() with { label, value }, and toggle selected', () => {
        const updateSelect = sinon.spy();
        const selected = true;
        const value = 100;
        const label = 'This is the label';
        const rendered = shallow(
            <DropdownItem
                updateSelect={updateSelect}
                value={value}
            >
                {label}
            </DropdownItem>
        );
        rendered.simulate('click');
        expect(updateSelect.calledWith(value, label, selected)).to.eq(true);
    });

    it('adds .selected class when props.selected === true', () => {
        const updateSelect = sinon.spy();
        const selected = false;
        const value = 100;
        const label = 'This is the label';
        const rendered = shallow(
            <DropdownItem
                updateSelect={updateSelect}
                value={value}
                selected={true}
            >
                {label}
            </DropdownItem>
        );
        rendered.simulate('click');
        expect(updateSelect.calledWith(value, label, selected)).to.eq(true);
    });
});
