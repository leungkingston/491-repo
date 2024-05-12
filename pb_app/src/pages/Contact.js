export default function Contact() {
  return (
    <>
      <body className="contactbod">
      <div className="contact">
        <div className="rightcont">
          <div className="touchtext">Let's get in touch!</div>
          <img src="https://cdn.discordapp.com/attachments/928117248382599179/1237378783930089472/idk.png?ex=663b6e4b&is=663a1ccb&hm=76f1b148e15580e674d4f683467aeae501b18089af9ed2d8935a1da0b6c5d11a&" alt="" className="contimg" />
        </div>
        <div className="leftcont">
        <div className="touchtext" style={{ color: "black" }}>Contact Us</div>
          <form className="cont-form" action="">
          <div className="cont-input">
            <input type="text" placeholder="Name" />
          </div>
          <div className="cont-input">
            <input type="text" placeholder="Email" />
          </div>
          <div className="cont-input">
            <textarea type="text" placeholder="Message"></textarea>
          </div>
          <button className="cont-b">SUBMIT</button>
          </form>
        </div>
      </div>
      </body>
    </>
  );
}
