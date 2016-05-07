
# Bar Collapsible React Native

It's a React Native bar component with different interactions: Text Only,
Clickable, Collapsible.

## Install

Install the package via npm:

```
    npm i react-native-bar-collapsible --save
```

Import the component:

```
    import Collapsible from 'react-native-bar-collapsible';
```

## Usage

**Text Only**:

    This is the default action, you just need to pass a "title" property with
    the text to show

```
    <Collapsible title='My title'/>
```

**Clickable**:

    You need to pass the properties:
    - title: string
    - clickable: boolean. If false or null the default bar to be rendered is text only.
    - icon: string, a FontAwesome icon name. If no icon property is passed the
        default is 'angle-right'.
    - onPressed: function

```
    <Collapsible
        title='My title'
        clickable={true}
        icon='rocket'
        onPressed={() => this._myFunction()}/>
```

**Collapsible**:

    You need to pass the properties:
    - title: string
    - collapsible: boolean. If false or null the default bar to be rendered is text only.
    - iconCollapsed: string, a FontAwesome icon name. If no icon property is passed the
        default is 'plus'.
    - iconOpened: string, a FontAwesome icon name. If no icon property is passed the
        default is 'minus'.
    - children: The View or component you want to rendered in the toggled view.

```
    <Collapsible
        title='My title'
        collapsible={true}
        iconCollapsed='chevron-right'
        iconOpened='chevron-down'
        children={<OtherComponent/>}/>
```

### Another properties for customization

    Additional to the basic properties, you can pass:
    - backgroundColor
    - iconSize
    - tintColor

```
    <Collapsible
        title='My title'
        clickable={true}
        icon='rocket'
        backgroundColor='#BF5327'
        tintColor='#F2F2F2'
        iconSize={15}/>
```

## License

```
   Copyright (C) 2016 Carolina Aguilar

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing,
   software distributed under the License is distributed on an
   "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   KIND, either express or implied.  See the License for the
   specific language governing permissions and limitations
   under the License.
```
