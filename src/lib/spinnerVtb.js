class Spinner {
  constructor(r) {
    this.r = r || 75
    this.d = this.r * 2
    this.circuit = Math.PI * this.d
    this.chord = 2 * this.r * Math.sin((((360 / this.props.countParticles) * Math.PI) / 2) / 180)
    this.particleWidth = Math.ceil(this.circuit / this.props.countParticles)
    this.colors = this.$getColors()
  }

  props = {
    startColor: [0, 170, 255],
    endColor: [19, 37, 255],
    countParticles: 96,
    height: 17
  }

  create() {
    let svg = `<svg class="spinner-vtb" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${this.r * 2} ${this.r * 2}"/>`
    let spinners = document.querySelectorAll('div.spinner-vtb')
    spinners.forEach((spinner, k) => {
      spinner.innerHTML = svg
      this.$getParticles(spinner.firstElementChild)
    })
  }

  $getParticles(e) {
    for (var i = 1; i <= this.props.countParticles; i++) {
      let myrect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      myrect.setAttribute('x', this.r - this.chord / 2);
      myrect.setAttribute('y', this.props.height / 2 - this.props.height / Math.PI);
      myrect.setAttribute('width', this.chord)
      myrect.setAttribute('height', this.props.height)
      myrect.setAttribute('transform', `rotate(${i * (360 / this.props.countParticles)}, ${this.r}, ${this.r})`)
      myrect.setAttribute('fill', this.colors[i - 1]);
      e.appendChild(myrect)
    }
    let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    circle.setAttribute('cx', this.r)
    circle.setAttribute('cy', this.props.height - this.props.height / Math.PI)
    circle.setAttribute('r', this.props.height / 2)
    circle.setAttribute('fill', this.colors[this.props.countParticles - 1])
    e.appendChild(circle)
  }

  $getColors() {
    let colors = []
    for (var i = 1; i <= this.props.countParticles; i++) {
      let res = []
      this.props.startColor.forEach((color, k) => {
        res.push(Math.ceil(-(((color - this.props.endColor[k]) / this.props.countParticles) * (i + 1)) + color))
      })
      colors.push(`rgb(${res.join(', ')})`)
    }
    return colors
  }
}

export const spinner = new Spinner()