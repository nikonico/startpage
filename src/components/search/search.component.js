class Search extends Component {
  x;
  refs = {
    search: '#search',
    input: '#search input[type="text"]',
    engines: '.search-engines',
    close: '.close'
  };

  constructor() {
    super();

    this.engines = CONFIG.search.engines;
  }

  style() {
    return `
      #search {
        top: 18%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        height: 120px;
        width: 1200px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99;
        backdrop-filter: blur(5px);
        transition: all .2s ease-in-out;
      }



      #search div {
          position: relative;
          width: 80%;
      }

      #search input {
          border: 0;
          outline: 0;
          width: 100%;
          box-shadow: inset 0 -2px #737373;
          padding: .5em 0;
          background: none;
          font: 500 22px 'Roboto', sans-serif;
          letter-spacing: 1px;
          color: #d4be98;
      }

      #search input:focus {
          box-shadow: inset 0 -2px #d4be98;
      }

      #search input::selection {
          background: #e78a4e;
          color: #32302f;
      }

      #search .close {
          background: 0;
          border: 0;
          outline: 0;
          color: #d4be98;
          position: absolute;
          right: 0;
          cursor: pointer;
          top: 15px;
      }

      #search .close:hover {
          filter: opacity(.5);
      }

      .search-engines {
          list-style: none;
          color: rgba(212, 190, 152, 0.5);
          display: flex;
          padding: 0;
          top: 50px;
          left: 0;
          margin: 1em 0 0 0;
      }

      .search-engines li p {
          cursor: default;
          transition: all .2s;
          font-size: 12px;
          font-family: 'Roboto', sans-serif;
      }

      .search-engines li {
          margin: 0 1em 0 0;
      }

      .search-engines li.active {
          color: #d4be98;
          font-weight: 700;
      }
    `;
  }

  imports() {
    return [
      this.resources.fonts.roboto,
      this.resources.icons.material
    ];
  }

  template() {
    this.x = `
      <div id="search">
        <div>
          <input type="text" spellcheck="false" placeholder="search" autofocus="true">
          <ul class="search-engines"></ul>
        </div>
      </div>
  `;

    return this.x;
  }

  loadEngines() {
    for (var key in this.engines)
      this.refs.engines.innerHTML += `<li><p title="${this.engines[key][1]}">!${key}</p></li>`;
  }

  activate() {
    this.refs.search.classList.add('active');
    this.refs.input.scrollIntoView();
    setTimeout(() => this.refs.input.focus(), 100);
  }

  deactivate() {
    this.refs.search.classList.remove('active');
  }

  handleSearch(event) {
    const { target, key } = event;

    let args = target.value.split(' ');
    let prefix = args[0];
    let defaultEngine = this.engines['d'][0];
    let engine = defaultEngine;

    this.refs.engines.childNodes.forEach(engine => {
      if (prefix === engine.firstChild.innerHTML)
        engine.classList.add('active');
      else
        engine.classList.remove('active');
    });

    if (key === 'Enter') {
      if (prefix.indexOf('!') === 0) {
        engine = this.engines[prefix.substr(1)][0];
        args = args.slice(1);
      }

      window.location = engine + encodeURI(args.join(' '));
    }

    if (key === 'Escape')
      this.deactivate();
  }

  setEvents() {
    this.refs.search.onkeyup = (e) => this.handleSearch(e);
    this.refs.close.onclick = () => this.deactivate();
  }

  connectedCallback() {
    this.render().then(() => {
      this.loadEngines();
      this.setEvents();
    });
  }
}
