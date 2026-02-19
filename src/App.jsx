const LOGO = `█████╗    ██████╗   ██████╗   ██╗       ██╗   ███████╗  ██████╗   
██╔══██╗  ██╔══██╗  ██╔══██╗  ██║       ██║   ██╔════╝  ██╔══██╗  
███████║  ██████╔╝  ██████╔╝  ██║       ██║   ██████╗   ██║  ██║  
██╔═══██║ ██╔═══╝   ██╔═══╝   ██║       ██║   ██╔════╝  ██║  ██║  
██║   ██║ ██║       ██║       ███████╗  ██║   ███████╗  ██████╔╝  
╚═╝   ╚═╝ ╚═╝       ╚═╝       ╚══════╝  ╚═╝   ╚══════╝  ╚═════╝   

██████╗   ███████╗  ███████╗  ███████╗  █████╗    ██████╗    █████╗   ██╗  ██╗  
██╔══██╗  ██╔════╝  ██╔════╝  ██╔════╝  ██╔══██╗  ██╔══██╗  ██╔════╝  ██║  ██║  
██████╔╝  ██████╗   ███████╗  ██████╗   ███████║  ██████╔╝  ██║       ███████║  
██╔══██╗  ██╔════╝  ╚════██╗  ██╔════╝  ██╔═══██║ ██╔══██╗  ██║       ██╔══██║  
██║  ╚██╗ ███████╗  ███████║  ███████╗  ██║   ██║ ██║  ╚██╗ ╚██████╗  ██║  ██║  
╚═╝   ╚═╝ ╚══════╝  ╚══════╝  ╚══════╝  ╚═╝   ╚═╝ ╚═╝   ╚═╝  ╚═════╝  ╚═╝  ╚═╝  

 █████╗   ██╗       ██╗   ██╗ ██████╗   
██╔════╝  ██║       ██║   ██║ ██╔══██╗  
██║       ██║       ██║   ██║ ██████╔╝  
██║       ██║       ██║   ██║ ██╔══██╗  
╚██████╗  ███████╗  ╚██████╔╝ ██████╔╝  
 ╚═════╝  ╚══════╝   ╚═════╝  ╚═════╝   `

function App() {
  return (
    <div className="app">
      <img src="/centaur.svg" alt="" className="centaur" />
      <div className="logo-wrap">
        <pre className="logo" aria-label="Applied Research Club">{LOGO}</pre>
      </div>
      <section className="tagline">
        <h2>Accelerate RnD productivity</h2>
        <p>Learn the communication skills you need to join, serve, or build deep-tech product teams. ARC is a learn-by-doing system, taught via six online lectures.</p>
        <div className="keywords">
          <span className="keyword">BLOOM</span>
          <span className="keyword">GROW</span>
          <span className="keyword">SELL</span>
          <span className="keyword">DECIDE</span>
          <span className="keyword">LEAD</span>
          <span className="keyword">AUTOMATE</span>
        </div>
      </section>
    </div>
  )
}

export default App
