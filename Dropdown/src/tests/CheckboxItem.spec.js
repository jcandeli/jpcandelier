/* global describe, it, beforeEach */
/* eslint no-unused-expressions: "off" */
import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import UnCheckedBox from 'react-icons/lib/fa/square-o';
import CheckedBox from 'react-icons/lib/fa/check-square-o';

import { CheckboxItem } from '../index';

chai.use(chaiEnzyme());

describe('(Component) CheckboxItem', () => {
    it('renders without errors', () => {
        const rendered = shallow(<CheckboxItem />);
        expect(rendered.length).to.eq(1);
    });

    it('calls props.updateSelect() when clicked', () => {
        const updateSelect = sinon.spy();
        const rendered = shallow(<CheckboxItem updateSelect={updateSelect} />);
        rendered.simulate('click');
        expect(updateSelect.calledOnce).to.eq(true);
    });

    it('calls props.updateSelect() with { label, value }, and toggle selected', () => {
        const updateSelect = sinon.spy();
        const selected = true;
        const value = 100;
        const label = 'This is the label';
        const rendered = shallow(
            <CheckboxItem
                updateSelect={updateSelect}
                value={value}
            >
                {label}
            </CheckboxItem>
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
            <CheckboxItem
                updateSelect={updateSelect}
                value={value}
                selected={true}
            >
                {label}
            </CheckboxItem>
        );
        rendered.simulate('click');
        expect(updateSelect.calledWith(value, label, selected)).to.eq(true);
    });

    it('displays checked box when selected === true', () => {
        const rendered = shallow(<CheckboxItem selected={true} />);
        expect(rendered.find(CheckedBox).length).to.eq(1);
        expect(rendered.find(UnCheckedBox).length).to.eq(0);
    });

    it('displays unchecked box when selected === false', () => {
        const rendered = shallow(<CheckboxItem selected={false} />);
        expect(rendered.find(CheckedBox).length).to.eq(0);
        expect(rendered.find(UnCheckedBox).length).to.eq(1);
    });
});
