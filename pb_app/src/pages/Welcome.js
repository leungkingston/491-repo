export default function Welcome() {
    return (
        <>
        
        <div className="container">
            <div className="content">
            <div className="image-container">
                <img src="https://images7.alphacoders.com/133/thumb-1920-1338126.png" alt='img' />
                <div className="centered-text"><b className="bigtitle">WELCOME TO TIMEWISE</b>
                    <h5 className="sub-text">EFFORTLESS TIME MANAGEMENT, ALWAYS ON POINT</h5>
                    <button className="stbutton"><b>GET STARTED</b></button>
                </div>
            </div>
            </div>
        </div>
        <div className="container-feat">
          <div className="title">
            <h1 className="underline-header">Manage your Schedule</h1>
          </div>
          <div className="features">
            <div className="card">
              <div className="icon">
                <i class="fa-solid fa-user"></i>
              </div>
              <h2>Personalized Collections</h2>
              <p>
              Access your custom collection for seamless itinerary management. Ensure your schedule data 
              is securely stored, offering a personalized and convenient overview of your daily agenda.
              </p>
              <a href="https://pocketbase.io/docs/collections/" className="boottoon">Read More</a>
            </div>
            <div className="card">
              <div className="icon">
                <i class="fa-solid fa-hand-holding-dollar"></i>
              </div>
              <h2>Add / Delete Events</h2>
              <p>
              Efficiently control your schedule with our app. Seamlessly add or remove events for real-time updates, 
              providing a clear overview for effective time management. Stay on top of your tasks, 
              ensuring an up-to-date record of your commitments.
              </p>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="boottoon rick"><span>Read More</span></a>
            </div>
            <div className="card">
              <div className="icon">
                <i class="fa-solid fa-address-card"></i>
              </div>
              <h2>Register or Log In</h2>
              <p>
              New users, register for complete schedule management. Unlock personalized features, secure data storage, 
              and powerful tools. Returning users, log in to access your tailored schedule dashboard.
              </p>
              <div className="nextTo">
                <a href="signup" className="boottoon">Sign Up</a><a href="login" className="boottoon">Log In</a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ clear: 'both' }}></div>
        <div className="boutcard">
        <img className="picofperson" src="https://cdn.discordapp.com/attachments/928117248382599179/1237332082364125214/DSC00086.jpg?ex=663b42cc&is=6639f14c&hm=6a8d48f5bcf17290690125d21ac7805a1fa16086790896d534e57da553dbbefd&" alt='img' />
        <div className="text-container">
        <h1 style={{ textAlign: 'left', marginLeft: 0}}>ABOUT THE CREATOR</h1>
            <p>
            Meet Kingston Leung, a dedicated student at California State University, Fullerton. 
            Passionate about computer science, Kingston is known for his proactive approach to challenges.
            </p>
            <p>
            He excels in software development, combining creativity with technical expertise. 
            Kingston enjoys crafting intuitive user interfaces and architecting scalable backend systems.
            </p>
            <p>
            Furthermore, Kingston actively engages with the CSUF tech community, fostering collaboration and supporting fellow students in their technological endeavors.
            </p>
        </div>
        </div>
        </>
    );
}