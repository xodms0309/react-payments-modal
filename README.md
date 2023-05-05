# tami-modal 라이브러리

![NPM](https://img.shields.io/npm/v/tami-modal.svg)

This is a simple modal/bottomsheet library you can use in React.

## How to install

### npm

```bash
npm install tami-modal
```

### yarn

```tsx
yarn add tami-modal
```

## How to use

### import

```tsx
import Modal from 'tami-modal';
```

### Props

| props             | value                                  | meaning                               |
| ----------------- | -------------------------------------- | ------------------------------------- |
| **isOpen**        | `true`, `false`                        | boolean value for modal open/close    |
| **onCloseModal**  | function                               | function for closing modal            |
| **modalLocation** | `center`, `bottom` (default: `center`) | depends where the modal should locate |

## Example

```tsx
import { useState } from 'react';
import Modal from 'tami-modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='App'>
      <button onClick={openModal}>open modal</button>
      <Modal isOpen={isOpen} onCloseModal={closeModal} modalLocation={'bottom'}>
        {/* Modal Contents that you want to pass it as a children */}
      </Modal>
    </div>
  );
}

export default App;
```

![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/55427367/236401637-6f890099-fcbe-49af-9257-64f7841acf3a.gif)

### Contributor

| <img src="https://avatars.githubusercontent.com/u/55427367?v=4" width=150px> |
| :--------------------------------------------------------------------------: |
|                  [Taeeun Kim](http://github.com/xodms0309)                   |
