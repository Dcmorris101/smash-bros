import React from 'react';

export default ({data, filterText}) => {

  // const fighterStyle = {
  //   backgroundImage: 'url(https://www.smashbros.com/assets_v2/img/fighter/thumb_h/' + data.name.toLowerCase() + '.png)'
  // }


  const namesList = data
    .filter(name => {
      // remove names that do not match current filter filterText
      return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
    })
    .map(name => {


      return (
        <div className="col-xs-12 col-md-4" key={name.id}>
          <a className="nameListbtn" href={`/fighters/${name.id}/${name.name.replace(/\s+/g, '-').toLowerCase()}`}>
            <div className="fighter-name-container">
              <li className="fighter-button" style={ {backgroundImage: 'url(/images/' +
                name.name.toLowerCase().replace(/\& /g, "and ").replace(/ |-/g, "_").split('.').join('') +
                '.png)'} }>
                <div className="fighterName">
                  {name.name}
                </div>
              </li>
            </div>
          </a>
        </div>
      )
    })


  return (
    <div className="App">
      <div className="main-container">
        <div className="fighter-inner">
          <div className="row">
            {namesList}
          </div>
        </div>
      </div>
    </div>
  );
}
