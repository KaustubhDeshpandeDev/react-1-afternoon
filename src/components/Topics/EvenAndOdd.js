import React, { Component } from 'react';

// Topics
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'

export default class TopicBrowser extends Component {
  render() {
    return (
      <div>
        <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum />
      </div>
    )
  }
}
```

</details>

<details>

<summary> <code> EvenAndOdd.js </code> </summary>

```js
import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
  render() {
    return (
      <p> EvenAndOdd Component </p>
    )
  }
}
```

</details>

<details>

<summary> <code> FilterObject.js </code> </summary>

```js
import React, { Component } from 'react';

export default class FilterObject extends Component {
  render() {
    return (
      <p> FilterObject Component </p>
    )
  }
}
```

</details>

<details>

<summary> <code> FilterString.js </code> </summary>

```js
import React, { Component } from 'react';

export default class FilterString extends Component {
  render() {
    return (
      <p> FilterString Component </p>
    )
  }
}
```

</details>

<details>

<summary> <code> Palindrome.js </code> </summary>

```js
import React, { Component } from 'react';

export default class Palindrome extends Component {
  render() {
    return (
      <p> Palindrome Component </p>
    )
  }
}
```

</details>

<details>

<summary> <code> Sum.js </code> </summary>

```js
import React, { Component } from 'react';

export default class Sum extends Component {
  render() {
    return (
      <p> Sum Component </p>
    )
  }
}