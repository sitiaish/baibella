// legend 1
const legend1 = document.getElementById('legend-1');
d3.select('#legend-1').attr('width', 300).attr('height', 300).call(responsivefy);
const rc = rough.svg(legend1);

legend1
  .appendChild(
    rc.polygon(
      [
        [80, 10],
        [130, 60],
        [80, 110],
        [30, 60],
        [80, 10],
      ],
      { fill: '#ffa600', fillStyle: 'zigzag', roughness: 2, fillWeight: 3, stroke: 'transparent' }
    )
  )
  .classList.add('base-1');

legend1
  .appendChild(
    rc.polygon(
      [
        [80, 10],
        [130, 60],
        [80, 110],
        [30, 60],
        [80, 10],
      ],
      { fill: '#ffa600', fillStyle: 'zigzag', roughness: 2, fillWeight: 3, stroke: 'transparent' }
    )
  )
  .classList.add('base-2');

legend1
  .appendChild(
    rc.polygon(
      [
        [80, 10],
        [130, 60],
        [80, 110],
        [30, 60],
        [80, 10],
      ],
      { fill: '#fb6239', fillStyle: 'zigzag', roughness: 2, fillWeight: 3, stroke: 'transparent' }
    )
  )
  .classList.add('base-2-1');

legend1
  .appendChild(
    rc.polygon(
      [
        [80, 10],
        [130, 60],
        [80, 110],
        [30, 60],
        [80, 10],
      ],
      { fill: '#ffa600', fillStyle: 'zigzag', roughness: 1, fillWeight: 3, stroke: 'transparent' }
    )
  )
  .classList.add('base-3');

legend1
  .appendChild(
    rc.polygon(
      [
        [80, 10],
        [130, 60],
        [80, 110],
        [30, 60],
        [80, 10],
      ],
      { fill: '#fb6239', fillStyle: 'zigzag', roughness: 3, fillWeight: 3, stroke: 'transparent' }
    )
  )
  .classList.add('base-3-1');

legend1
  .appendChild(
    rc.polygon(
      [
        [80, 10],
        [130, 60],
        [80, 110],
        [30, 60],
        [80, 10],
      ],
      { fill: '#d81e5b', fillStyle: 'cross-hatch', roughness: 5, fillWeight: 3, stroke: 'transparent' }
    )
  )
  .classList.add('base-3-2');

d3.select('g.base-1').attr('transform', 'scale(0.8)');

d3.select('g.base-2').attr('transform', 'scale(0.8) translate(0, 120)');
d3.selectAll('g.base-2-1').attr('transform', 'scale(0.65) translate(28, 120) rotate(25)');

d3.select('g.base-3').attr('transform', 'scale(0.8) translate(0, 240)');
d3.selectAll('g.base-3-1').attr('transform', 'scale(0.65) translate(28, 260) rotate(25)');
d3.selectAll('g.base-3-2').attr('transform', 'scale(0.5) translate(35, 410) rotate(-20)');

d3.select('#legend-1')
  .append('text')
  .attr('text-anchor', 'middle')
  .attr('transform', 'translate(175, 50)')
  .text('Meh easy, chill story');

d3.select('#legend-1')
  .append('text')
  .attr('text-anchor', 'middle')
  .attr('transform', 'translate(185, 150)')
  .text('Whoa, getting harder');

d3.select('#legend-1')
  .append('text')
  .attr('text-anchor', 'middle')
  .attr('transform', 'translate(185, 250)')
  .text('GAH this monstrosity!!');

// legend 2
const legend2 = document.getElementById('legend-2');
d3.select('#legend-2').attr('width', 300).attr('height', 300).call(responsivefy);
const rc2 = rough.svg(legend2);

legend2
  .appendChild(
    rc2.circle(50, 50, 20, { fill: 'purple', fillStyle: 'solid', roughness: 1, fillWeight: 3, stroke: 'black' })
  )
  .classList.add('circle');

d3.select('g.circle').attr('transform', 'translate(40, 150)');

legend2
  .appendChild(
    rc2.polygon(
      [
        [80, 10],
        [130, 60],
        [80, 110],
        [30, 60],
        [80, 10],
      ],
      { fill: 'none', fillStyle: 'solid', roughness: 1, fillWeight: 3, stroke: 'black' }
    )
  )
  .classList.add('cardinal');

const cardinalTools = d3.select('g.cardinal');
cardinalTools.attr('transform', 'translate(80, 25)');
cardinalTools
  .append('text')
  .attr('text-anchor', 'middle')
  .text("Bella's customs")
  .attr('transform', 'translate(80, 0)');
cardinalTools.append('text').attr('text-anchor', 'middle').text('Maps').attr('transform', 'translate(165, 65)');
cardinalTools.append('text').attr('text-anchor', 'middle').text('Flourish').attr('transform', 'translate(-5, 65)');

const petals = d3.select('#legend-2').append('g').attr('transform', 'translate(200, 200)');

petals
  .append('path')
  .attr('d', 'M0 0 C50 25 50 75 0 100 C-50 75 -50 25 0 0')
  .attr('fill', '#8F9232')
  .attr('transform', 'rotate(210) scale(0.35)');

petals
  .append('path')
  .attr('d', 'M0,0 C50,40 50,70 20,100 L0,85 L-20,100 C-50,70 -50,40 0,0')
  .attr('fill', '#8F9232')
  .attr('transform', 'rotate(90) scale(0.35)');

petals.append('text').attr('text-anchor', 'middle').text('a Bella custom').attr('transform', 'translate(0, 40)');

// legend 3
const legend3 = document.getElementById('legend-3');
d3.select('#legend-3').attr('width', 300).attr('height', 300).call(responsivefy);
const rc3 = rough.svg(legend3);

legend3
  .appendChild(
    rc3.linearPath(
      [
        [40, 30],
        [120, 30],
      ],
      { fillStyle: 'zigzag', roughness: 2, strokeWidth: 4, stroke: '#1EA6A6' }
    )
  )
  .classList.add('internal');

legend3.appendChild(
  rc3.linearPath(
    [
      [40, 80],
      [120, 80],
    ],
    { fillStyle: 'zigzag', roughness: 2, strokeWidth: 4, stroke: '#306988' }
  )
);

legend3.appendChild(
  rc3.linearPath(
    [
      [40, 130],
      [120, 130],
    ],
    { fillStyle: 'zigzag', roughness: 2, strokeWidth: 4, stroke: '#A62955' }
  )
);

legend3.appendChild(
  rc3.linearPath(
    [
      [40, 180],
      [120, 180],
    ],
    { fillStyle: 'zigzag', roughness: 2, strokeWidth: 4, stroke: '#9868CB' }
  )
);

legend3.appendChild(
  rc3.linearPath(
    [
      [40, 230],
      [120, 230],
    ],
    { fillStyle: 'zigzag', roughness: 2, strokeWidth: 4, stroke: '#3A1E7A' }
  )
);

d3.select('#legend-3').append('text').attr('transform', 'translate(150, 30)').text('People');
d3.select('#legend-3').append('text').attr('transform', 'translate(150, 80)').text('Politics');
d3.select('#legend-3').append('text').attr('transform', 'translate(150, 130)').text('History');
d3.select('#legend-3').append('text').attr('transform', 'translate(150, 180)').text('Religion');
d3.select('#legend-3').append('text').attr('transform', 'translate(150, 230)').text('Culture');

function responsivefy(svg) {
  const container = d3.select(svg.node().parentNode),
    width = parseInt(svg.style('width'), 10),
    height = parseInt(svg.style('height'), 10),
    aspect = width / height;

  svg.attr('viewBox', `0 0 ${width} ${height}`).attr('preserveAspectRatio', 'xMinYMid').call(resize);

  d3.select(window).on('resize.' + container.attr('id'), resize);

  function resize() {
    const w = parseInt(container.style('width'));
    svg.attr('width', w);
    svg.attr('height', Math.round(w / aspect));
  }
}
