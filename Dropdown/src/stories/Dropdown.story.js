import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Dropdown from '../Dropdown';
import SubMenu from '../SubMenu';
import DropdownItem from '../DropdownItem';
import CheckboxItem from '../CheckboxItem';

storiesOf('Dropdown', module)
    .addWithInfo('Standard Dropdown', () => (
        <Dropdown placeholder="select reason ..." onSelect={action('Item Selected')}>
            <DropdownItem value="1">
                Test
            </DropdownItem>

            <CheckboxItem value="2">
                Language
            </CheckboxItem>

            <CheckboxItem value="3">
                Nudity
            </CheckboxItem>

            <CheckboxItem value="4">
                Drugs
            </CheckboxItem>

            <CheckboxItem value="5">
                Violence
            </CheckboxItem>
        </Dropdown>
    ))

    .addWithInfo('Complex Dropdown', () => (
        <Dropdown placeholder="select reason ..." onSelect={action('Item Selected')}>
            <DropdownItem value="1">
                Test
            </DropdownItem>

            <SubMenu label="Non-brand safe">
                <CheckboxItem value="2">
                    Language
                </CheckboxItem>

                <CheckboxItem value="3">
                    Nudity
                </CheckboxItem>

                <CheckboxItem value="4">
                    Drugs
                </CheckboxItem>

                <CheckboxItem value="5">
                    Violence
                </CheckboxItem>
            </SubMenu>

            <SubMenu label="Not relevant">
                <DropdownItem value="Video not relevant to 1+ segments">
                    Video not relevant to 1+ segments
                </DropdownItem>

                <DropdownItem value="1+ segments are not relevant to packages">
                    1+ segments are not relevant to packages
                </DropdownItem>
            </SubMenu>
        </Dropdown>
    ))
    .addWithInfo('Cancel Value', () => (
        <Dropdown placeholder="select reason ..." onSelect={action('Item Selected')}>
            <DropdownItem value="1">
                Test
            </DropdownItem>

            <CheckboxItem value="2">
                Language
            </CheckboxItem>

            <CheckboxItem value="3">
                Nudity
            </CheckboxItem>

            <CheckboxItem value="4">
                Drugs
            </CheckboxItem>

            <CheckboxItem value="5">
                Violence
            </CheckboxItem>

            <DropdownItem value="">
                Cancel
            </DropdownItem>
        </Dropdown>
    ))
    .addWithInfo('Default Value', () => (
        <div>
            <Dropdown
                placeholder="select reason ..."
                onSelect={action('Item Selected')}
                initValue={{ label: 'Test 3', value: '3' }}
            >
                <DropdownItem value="1">
                    Test 1
                </DropdownItem>

                <DropdownItem value="2">
                    Test 2
                </DropdownItem>

                <DropdownItem value="3">
                    Test 3
                </DropdownItem>

                <DropdownItem value="4">
                    Test 4
                </DropdownItem>

                <DropdownItem value="5">
                    Test 5
                </DropdownItem>
            </Dropdown>

            <br />
            <Dropdown
                placeholder="select reason ..."
                onSelect={action('Item Selected')}
                initValue={[{ label: 'Nudity', value: '3' }, { label: 'Violence', value: '5' }]}
            >
                <CheckboxItem value="2">
                    Language
                </CheckboxItem>

                <CheckboxItem value="3">
                    Nudity
                </CheckboxItem>

                <CheckboxItem value="4">
                    Drugs
                </CheckboxItem>

                <CheckboxItem value="5">
                    Violence
                </CheckboxItem>
            </Dropdown>
        </div>
    ));
