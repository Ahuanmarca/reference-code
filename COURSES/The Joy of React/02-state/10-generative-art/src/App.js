import React from 'react';

import GenerativeArt from './GenerativeArt';

/*
  NOTE: On the radio buttons:
  - Don't forget the 'name' attribute on the inputs, so the inputs are part of the same radio group, and only once can be clicked at a time (even without React?)
  - Don't forget the labels for accessibility and better user experience
*/

function App() {
  const [numOfLines, setNumOfLines] = React.useState(5);

  /*
    Accepted values:
      - basic
      - monochrome
      - froot-loops
      - spooky
  */
  const [colorTheme, setColorTheme] = React.useState('basic');

  const colorThemes = [
    ['basic', 'Basic'],
    ['monochrome', 'Monochrome'],
    ['froot-loops', 'Froot Loops'],
    ['spooky', 'Spooky Night'],
  ];

  /*
    Accepted values:
      - circles
      - polygons
  */
  const [shape, setShape] = React.useState('circles');

  return (
    <>
      <GenerativeArt
        numOfLines={numOfLines}
        colorTheme={colorTheme}
        shape={shape}
      />

      <form>
        <fieldset>
          <legend>Controls</legend>
          <div className="row">
            <div className="col">
              <label htmlFor="num-of-lines" className="control-heading">
                Number of Lines:
              </label>
              <input
                id="num-of-lines"
                type="range"
                min="1"
                max="15"
                value={numOfLines}
                onChange={(e) => setNumOfLines(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label className="control-heading" htmlFor="color-theme">
                Color Theme:
              </label>
              <select
                onChange={(e) => setColorTheme(e.target.value)}
                id="color-theme"
              >
                {colorThemes.map(([value, name]) => {
                  return <option value={value}>{name}</option>;
                })}
              </select>
            </div>
            <div className="col">
              <div className="control-heading">Shape:</div>
              <div className="radio-wrapper">
                <div className="radio-option">
                  <input
                    name="shape"
                    id="shape-circles"
                    type="radio"
                    value="circles"
                    checked={shape === 'circles'}
                    onChange={(e) => setShape('circles')}
                  />
                  <label htmlFor="shape-circles">Circles</label>
                </div>
                <div className="radio-option">
                  <input
                    name="shape"
                    id="shape-polygons"
                    type="radio"
                    value="polygons"
                    checked={shape === 'polygons'}
                    onChange={(e) => setShape('polygons')}
                  />
                  <label htmlFor="shape-polygons">Polygons</label>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default App;