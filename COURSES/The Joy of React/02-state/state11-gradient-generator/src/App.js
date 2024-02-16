import React from 'react';
function App() {
  const [colors, setColors] = React.useState(['#FFD500', '#FF0040']);
  const [storage, setStorage] = React.useState([]);

  const colorStops = colors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`;

  function removeColor() {
    if (colors.length <= 2) return;

    const nextColors = [...colors];
    const removedColor = nextColors.pop();
    const nextStorage = [...storage, removedColor];

    setColors(() => nextColors);
    setStorage(() => nextStorage);
  }

  function addColor() {
    if (colors.length >= 5) return;

    const nextColors = [...colors];
    const nextStorage = [...storage];
    const fromStorage = nextStorage.pop();
    nextColors.push(fromStorage || '#FF0000');

    setColors(() => nextColors);
    setStorage(() => nextStorage);
  }

  function updateColor(e, index) {
    const nextColors = [...colors];
    nextColors[index] = e.target.value;
    setColors(() => nextColors);
  }

  return (
    <div className="wrapper">
      <div className="actions">
        <button onClick={removeColor}>Remove color</button>
        <button onClick={addColor}>Add color</button>
      </div>

      <div
        className="gradient-preview"
        style={{
          backgroundImage,
        }}
      />

      <div className="colors">
        {colors.map((color, index) => {
          const colorId = `color-${index}`;
          return (
            <div key={colorId} className="color-wrapper">
              <label htmlFor={colorId}>Color {index + 1}:</label>
              <div className="input-wrapper">
                <input
                  id={colorId}
                  type="color"
                  value={color}
                  onChange={(e) => updateColor(e, index)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;