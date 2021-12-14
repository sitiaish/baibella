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

function drawChart() {
  var chart = d3.select('#chart');
  chart.attr('width', '1200px').attr('height', '1100px').call(responsivefy);

  d3.json('data/bella-stories.json')
    .then(parseData)
    .catch(function (err) {
      console.log('Failed with', err);
    });

  function parseData(datapoints) {
    const squareNumber = {
      high: 3,
      medium: 2,
      low: 1,
    };
    var stories = datapoints.map((d) => ({
      story: d.story,
      shortname: d.shortname,
      complexity: squareNumber[d.complexity],
      link: d.link,
      tools: [d.maps, d.flourish],
      topic: d.topic,
      tooltip: d.custom_elaboration,
      tooltip_hard: d.hard_elaboration,
    }));

    function drawFlowers(datapoints) {
      var flower = chart
        .selectAll('g.flowers')
        .data(datapoints)
        .enter()
        .append('g')
        .classed('flowers', true)
        .attr('transform', (d, i) => `translate(${(i % 6) * 200 + 100}, ${Math.floor(i / 6) * 200 + 80})`);

      flower
        .append('text')
        .text((d) => d.shortname)
        .attr('text-anchor', 'middle')
        .attr('transform', 'translate(0, 120)');

      const topics = {
        people: '#1EA6A6',
        politics: '#306988',
        history: '#A62955',
        religion: '#9868CB',
        culture: '#3A1E7A',
      };

      flower
        .append('line')
        .attr('x1', 10)
        .attr('y1', 10)
        .attr('x2', 30)
        .attr('y2', 10)
        .attr('stroke-width', '4')
        .attr('stroke', (d) => topics[d.topic])
        .attr('transform', 'translate(-20, 80)');

      flower.on('click', (e, d) => {
        window.open(d.link);
      });

      flower
        .append('path')
        .attr('d', 'M0 0 C50 25 50 75 0 100 C-50 75 -50 25 0 0')
        .attr('opacity', (d) => (d.tooltip ? 1 : 0))
        .attr('fill', '#8F9232')
        .attr('stroke', (d) => (d.tooltip === 'instastorypack' ? '#2F4858' : 'none'))
        .attr('stroke-width', 9)
        .attr('transform', 'rotate(210) scale(0.35)');

      flower
        .append('path')
        .attr('d', 'M0,0 C50,40 50,70 20,100 L0,85 L-20,100 C-50,70 -50,40 0,0')
        .attr('fill', '#8F9232')
        .attr('stroke', (d) => (d.tooltip === 'instastorypack' ? '#2F4858' : 'none'))
        .attr('stroke-width', 9)
        .attr('opacity', (d) => (d.tooltip ? 1 : 0))
        .attr('transform', 'rotate(90) scale(0.35)');

      flower
        .on('mouseover', function (event, d) {
          const customTooltip = document.getElementById('custom-tooltip-value');
          customTooltip.innerText = d.tooltip ? d.tooltip : 'No customs for this one';

          const hardTooltip = document.getElementById('hard-tooltip-value');
          hardTooltip.innerText = d.tooltip_hard ? d.tooltip_hard : 'No comments, go read the story';

          let x = event.offsetX;
          let y = event.offsetY;

          d3.select('.tooltip')
            .style('opacity', 1)
            .transition('outlol')
            .duration(0)
            .style('opacity', 1)
            .style('top', `${y + 10}px`)
            .style('left', `${x}px`);

          d3.select(this).selectAll('rect').attr('stroke-opacity', 0.8);
        })
        .on('mouseout', () => {
          d3.select('.tooltip').transition('outlol').duration(1500).style('opacity', 0);
          d3.selectAll('g.flowers').selectAll('rect').attr('stroke-opacity', 0);
        });

      flower
        .selectAll('rect')
        .data((d) => {
          return _.times(d.complexity, (i) => {
            const color = {
              0: '#ffa600',
              1: '#fb6239',
              2: '#d81e5b',
            };

            return {
              scale: 1 - i * 0.18,
              rotate: i % 2 ? 45 + i * 15 : 45 + i * -5,
              color: color[i],
            };
          });
        })
        .enter()
        .append('rect')
        .attr('width', 60)
        .attr('height', 60)
        .attr('fill', (d) => d.color)
        .attr('fill-opacity', 0.65)
        .attr('stroke', '#2F4858')
        .attr('stroke-width', 1)
        .attr('stroke-opacity', 0)
        .attr('transform', (d) => `translate(0) rotate(${d.rotate}) scale(${d.scale})`);

      flower
        .selectAll('circle.tools')
        .data((d) => {
          return _.times(d.tools.length, (i) => {
            const color = {
              0: 'none',
              1: 'purple',
            };
            const translateX = [49, -49];
            const translateY = [42, 42];
            // [BR, TR,]
            return {
              x: translateX[i],
              y: translateY[i],
              opacity: d.tools[i],
              color: color[d.tools[i]],
            };
          });
        })
        .enter()
        .append('circle')
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', 5.5)
        .attr('opacity', (d) => d.opacity)
        .attr('fill', (d) => d.color)
        .attr('stroke', '#FDF0D5')
        .attr('stroke-width', 1)
        .attr('transform', (d) => `translate(${d.x}, ${d.y})`);

      flower
        .selectAll('text.name')
        .append('text')
        .classed('name', true)
        .text((d) => d.story);
    }

    drawFlowers(stories);
  }
}

drawChart();
