export default function Features() {
    return (
        <>
        <div className="section-f">
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

        </>
    );
}