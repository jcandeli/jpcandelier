/* global describe, it, beforeEach */
/* eslint no-unused-expressions: "off" */
import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount } from 'enzyme';

import Dropdown, { DropdownItem, CheckboxItem, SubMenu } from '../index';

chai.use(chaiEnzyme());

describe('(Component) Dropdown', () => {
    it('renders without errors', () => {
        const rendered = shallow(<Dropdown />);
        expect(rendered.find('.dropdown-list').length).to.eq(1);
    });

    it('should render the .dropdown-btn with placeholder text', () => {
        const rendered = shallow(<Dropdown placeholder="This is the placecholder text" />);
        expect(rendered.find('.dropdown-btn').length).to.eq(1);
        expect(rendered.find('.dropdown-btn').text()).to.contain('This is the placecholder text');
    });

    it('should remove the .hide class on the ul when button clicked', () => {
        const rendered = shallow(<Dropdown />);
        expect(rendered.find('.menu').hasClass('hide')).to.eq(true);
        rendered.find('.dropdown-btn').simulate('click');
        expect(rendered.find('.menu').hasClass('hide')).to.eq(false);
    });

    it('pass updateSingle() as updateSelected prop if child is DropdownItem', () => {
        const rendered = shallow(
            <Dropdown>
                <DropdownItem />
            </Dropdown>
        );
        const dropdownItemProps = rendered.find('.menu').children().props();
        expect(dropdownItemProps.updateSelect).to.eq(rendered.instance().updateSingle);
    });

    it('pass updateMulti() as updateSelected prop if child is CheckboxItem', () => {
        const rendered = shallow(
            <Dropdown>
                <CheckboxItem />
            </Dropdown>
        );
        const checkboxItemProps = rendered.find('.menu').children().props();
        expect(checkboxItemProps.updateSelect).to.eq(rendered.instance().updateMulti);
    });

    it('pass updateSingle, updateMulti, singleValue, multiValue prop if child is SubMenu', () => {
        const rendered = shallow(
            <Dropdown>
                <SubMenu />
            </Dropdown>
        );
        const subMenuProps = rendered.find('.menu').children().props();
        expect(subMenuProps.updateSingle).to.eq(rendered.instance().updateSingle);
        expect(subMenuProps.updateMulti).to.eq(rendered.instance().updateMulti);
        expect(subMenuProps.singleValue).to.eq(rendered.instance().state.singleValue);
        expect(subMenuProps.multiValue).to.eq(rendered.instance().state.multiValue);
    });

    it('sets state.selectedLabel equal to DropdownItem value when DropdownItem clicked', () => {
        const rendered = mount(
            <Dropdown>
                <DropdownItem value="1">First item</DropdownItem>
                <DropdownItem value="2">Second item</DropdownItem>
            </Dropdown>
        );
        rendered.find('.dropdown-item').first().simulate('click');
        expect(rendered.state().selectedLabel).to.eq('First item');
    });

    it('defaults the dropdown when initValue is set', () => {
        let rendered;
        const initValue = { label: 'Second Item', value: '200' };
        const initValues = [
            { label: 'Second Item', value: '200' },
            { label: 'Third Item', value: '300' }
        ];

        rendered = shallow(
            <Dropdown initValue={initValue}>
                <DropdownItem value="100">
                    First Item
                </DropdownItem>
                <DropdownItem value="200">
                    Second Item
                </DropdownItem>
                <DropdownItem value="300">
                    Third Item
                </DropdownItem>
            </Dropdown>
        );
        expect(rendered.find('.dropdown-btn').text()).to.contain(initValue.label);

        rendered = shallow(
            <Dropdown initValue={initValues}>
                <CheckboxItem value="100">
                    First Item
                </CheckboxItem>
                <CheckboxItem value="200">
                    Second Item
                </CheckboxItem>
                <CheckboxItem value="300">
                    Third Item
                </CheckboxItem>
            </Dropdown>
        );
        expect(rendered.find('.dropdown-btn').text()).to.contain('Second Item, Third Item');
    });
});
