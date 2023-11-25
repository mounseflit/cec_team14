function showpts(){
    a=document.getElementById("dataset").value;
    console.log(a);
    if(a=="nakamura 1979"){
      const colorScale = d3.scaleOrdinal(['orangered']);

    //  const labelsTopOrientation = new Set(['Apollo 12', 'Luna 2', 'Luna 20', 'Luna 21', 'Luna 24', 'LCROSS Probe']); // avoid label collisions

      const elem = document.getElementById('globeViz');
     

      const moon = Globe()
        .globeImageUrl('./lunar_surface.jpg')
        .bumpImageUrl('./lunar_bumpmap.jpg')
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
        .showGraticules(true)
        .showAtmosphere(true) // moon has no atmosphere
        .labelText('label')
        .labelSize(1.7)
        .labelDotRadius(0.7)
        //.labelDotOrientation(d => labelsTopOrientation.has(d.label) ? 'top' : 'bottom')
        .labelColor(d => colorScale(d.lng))
        .labelLabel(d => `
            <div><b>Magnitude: ${d.Magnitude}</b><br></div>
            <div>co-ord: ${d.lng} , ${d.lat}</div>
            <div><p> this scale of moonquake <br> on earth might<br>${d.state}</div></p>
            
          `)
        .onLabelClick(d => window.open(d.url, '_blank'))
        (elem);

      fetch('./NAKAMURA_1979.json').then(r => r.json()).then(landingSites => {
        moon.labelsData(landingSites);
      });


    }
    else if(a=="nakamura 2005"){
    
   
      const colorScale = d3.scaleOrdinal(['orangered']);

      //const labelsTopOrientation = new Set(['Apollo 12', 'Luna 2', 'Luna 20', 'Luna 21', 'Luna 24', 'LCROSS Probe']); // avoid label collisions

      const elem = document.getElementById('globeViz');
      const moon = Globe()
        .globeImageUrl('./lunar_surface.jpg')
        .bumpImageUrl('./lunar_bumpmap.jpg')
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
        .showGraticules(true)
        .showAtmosphere(true) // moon has no atmosphere
        .labelText('label')
        .labelSize(1.7)
        .labelDotRadius(0.7)
        //.labelDotOrientation(d => labelsTopOrientation.has(d.label) ? 'top' : 'bottom')
        .labelColor(d => colorScale(d.lng))
        .labelLabel(d => `
            <div><p>The following is the depth<br>ofthe epicenter <br>of the moonquake</p></div>
            <div><b>Depth of Epicenter: ${d.Depth}km</b><br></div>
            <div>co-ord: ${d.lng} , ${d.lat}</div>
          
            
          `)
        .onLabelClick(d => window.open(d.url, '_blank'))
        (elem);

      fetch('./nakamura_2005.json').then(r => r.json()).then(landingSite => {
        moon.labelsData(landingSite);
      });

    }
    else if(a=="nakamura 1983"){
      const colorScale = d3.scaleOrdinal(['orangered']);

      //const labelsTopOrientation = new Set(['Apollo 12', 'Luna 2', 'Luna 20', 'Luna 21', 'Luna 24', 'LCROSS Probe']); // avoid label collisions

      const elem = document.getElementById('globeViz');
      const moon = Globe()
        .globeImageUrl('./lunar_surface.jpg')
        .bumpImageUrl('./lunar_bumpmap.jpg')
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
        .showGraticules(true)
        .showAtmosphere(true) // moon has no atmosphere
        .labelText('AI')
        .labelSize(1.7)
        .labelDotRadius(0.5)
        //.labelDotOrientation(d => labelsTopOrientation.has(d.label) ? 'top' : 'bottom')
        .labelColor(d => colorScale(d.lng))
        .labelLabel(d => `
            <div><p>This is the date<br>of impact of spacecarft<br>on the lunar surface</p>
            <div><b>Impact Date: ${d.Y}-${d.JD}</b><br></div>
            <div>co-ord: ${d.lng} , ${d.lat}</div>
            <div>Year: 
            
          `)
        .onLabelClick(d => window.open(d.url, '_blank'))
        (elem);

      fetch('./nakamura_1983.json').then(r => r.json()).then(landingSite => {
        moon.labelsData(landingSite);
      });
    } 
  }