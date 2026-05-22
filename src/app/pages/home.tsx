import avatar from "../../assets/avatar.webp";

export const Home = () => {
  return (
    <div>
		  <main>
				<div className="scanline"></div>
				<div className="bg-texture"></div>
				<div className="hud-corner top-left">
						SYS.STATUS: ONLINE<br />
						LOGGING: ENABLED // 31.2° N
				</div>
				<div className="hud-corner bottom-right">
						VER 2.0.25<br />
						WAITING INPUT...
				</div>

				<section className="hero container">
						<div className="hero-content">
								<h1 className="hero-title">
										SIEG<br />
										<span className="red-text">FRIED.</span>
								</h1>
								<p className="hero-subtitle">
										// GUITARIST & BASSIST <br/>
										<span>[ DIGITAL CREATOR ]</span>
								</p>
						</div>

						<div className="hero-jp">
								シーグフリード
						</div>

						<div className="scroll-hint">
								<div className="scroll-labels">
										<span className="scroll-text-en">SCROLL</span>
										<span className="scroll-text-jp">スクロール</span>
								</div>
								<div className="scroll-wire"></div>
						</div>
				</section>

				<div className="marquee-container">
						<div className="marquee-content">
								SIEG.FRIED  ///  GUITAR COVERS  ///  J-ROCK COVERS  ///  MUSIC  ///  BASS COVERS  ///  SIEG.FRIED  ///  GUITAR COVERS  ///  J-ROCK COVERS  ///  MUSIC  ///  BASS COVERS  ///  SIEG.FRIED  ///  GUITAR COVERS  ///  J-ROCK COVERS  ///  MUSIC  ///  BASS COVERS  ///  SIEG.FRIED  ///  GUITAR COVERS  ///  J-ROCK COVERS  ///  MUSIC  ///  BASS COVERS  ///
						</div>
				</div>

				<section className="about container">
                 <img
                    src={avatar}
                    className="avatar"
                    loading="lazy"
                  />
						<div>
								<span className="section-label">01. MY PROFILE</span>
								<h2 style={{fontFamily: "Playfair Display", fontSize: "2rem", marginBottom: "1rem"}}>Subtlety is louder.</h2>
								<p className="about-desc">
                    I'm シーグ (Siegfried), a guitarist and bassist. I like JRock, JPop, KRock, KPop, and more. I also love photography. 
								</p>
								<div style={{fontSize: "0.7rem", color: "#444", fontFamily: "monospace"}}>
										{">"} ROLE: CONTENT CREATOR<br />
										{">"} INSTRUMENTS: 6-STRINGS / 4-STRINGS<br />
										{">"} STATUS: RECORDING
								</div>
						</div>
				</section>

				<section className="arsenal-section container">
						<span className="section-label">02. MY GEAR</span>
						<div className="gear-grid">
								<div className="gear-item">
										<div className="gear-cat">Main Guitar</div>
										<div className="gear-name">Squier Debut Telecaster</div>
								</div>
								<div className="gear-item">
										<div className="gear-cat">Bass Guitar</div>
										<div className="gear-name">Persian EBS200-24 BK</div>
								</div>
								<div className="gear-item">
										<div className="gear-cat">Interface</div>
										<div className="gear-name">Scarlett Solo 3rd Gen</div>
								</div>
								<div className="gear-item">
										<div className="gear-cat">DAW</div>
										<div className="gear-name">Reaper</div>
								</div>
						</div>
				</section>

				<section className="influences-section container">
						<span className="section-label">03. FAVORITE ARTISTS</span>
						<div className="artist-grid">
								<a href="https://youtu.be/_dkq_9nL2f0?si=aZNLoIUEJaYicICP" target="_blank" rel="noopener noreferrer" className="artist-card">
										<span className="artist-id">ID: 001</span>
										<span className="artist-jp">エイハブ</span>
										<h3 className="artist-name">AHUB</h3>
										<div className="artist-meta">
												{">"} STYLE: J-ROCK<br />
												{">"} TRACK: YELP
										</div>
								</a>
								<a href="https://youtu.be/jJzw1h5CR-I?si=zbl4pz8_GSNXAvES" target="_blank" rel="noopener noreferrer" className="artist-card">
										<span className="artist-id">ID: 002</span>
										<span className="artist-jp">イブ</span>
										<h3 className="artist-name">Eve</h3>
										<div className="artist-meta">
												{">"} STYLE: J-ROCK<br />
												{">"} TRACK: DRAMATURGY
										</div>
								</a>
								<a href="https://youtu.be/-wb2PAx6aEs?si=JKzfIKMNnMFIvg9c" target="_blank" rel="noopener noreferrer" className="artist-card">
										<span className="artist-id">ID: 003</span>
										<span className="artist-jp">米津玄師</span>
										<h3 className="artist-name">Kenshi Yonezu</h3>
										<div className="artist-meta">
												{">"} STYLE: J-POP / ALT<br />
												{">"} TRACK: SAYONARA, MATA ITSUKA!
										</div>
								</a>
								<a href="https://youtu.be/ZUwaudw8ht0?si=D8YcGj20y_eYDTcv" target="_blank" rel="noopener noreferrer" className="artist-card">
										<span className="artist-id">ID: 004</span>
										<span className="artist-jp">ずっと真夜中でいいのに。</span>
										<h3 className="artist-name">Zutomayo</h3>
										<div className="artist-meta">
												{">"} STYLE: J-POP / ALT<br />
												{">"} TRACK: INSIDE JOKE
										</div>
								</a>
						</div>
				</section>

				<section className="covers-section container">
						<span className="section-label">04. LATEST</span>
						<div className="video-container">
								<div className="video-frame">
										<div className="video-wrapper">
												<iframe
													src="https://www.youtube.com/embed/xuqa-s7Qy3A"
													allowFullScreen
													style={{ border: 'none' }}
													width="100%"
													height="400px"
													title="Twisted game"
												/>
										</div>
								</div>
								<div className="video-frame">
										<div className="video-wrapper">
												<iframe
													src="https://www.youtube.com/embed/TmX8TV8ua-A"
													allowFullScreen
													style={{ border: 'none' }}
													width="100%"
													height="400px"
													title="ZUTOMAYO - Inside Joke (bass cover)"
												/>
										</div>
								</div>
								<div className="video-frame">
										<div className="video-wrapper">
												<iframe
													src="https://www.youtube.com/embed/7U40M-O9RUw"
													allowFullScreen
													style={{ border: 'none' }}
													width="100%"
													height="400px"
													title="YELP - AHUB (guitar cover)"
												/>
										</div>
								</div>
								<div className="video-frame">
										<div className="video-wrapper">
												<iframe
													src="https://www.youtube.com/embed/VIVMM5_FOZ4"
													allowFullScreen
													style={{ border: 'none' }}
													width="100%"
													height="400px"
													title="YELP - AHUB (bass cover)"
												/>
										</div>
								</div>
						</div>
				</section>

				<section className="socials-section">
						<div className="container">
								<span className="section-label">05. MY SOCIALS</span>
						</div>
						<div className="social-row">
								<a href="https://www.youtube.com/@Sieg_" className="social-btn" target="_blank">
										<span>YouTube</span>
										<div className="sub">@Sieg_</div>
								</a>
								<a href="https://www.instagram.com/_sieg.fried/" className="social-btn" target="_blank">
										<span>Instagram</span>
										<div className="sub">@_sieg.fried</div>
								</a>
								<a href="https://www.tiktok.com/@siegfried381" className="social-btn" target="_blank">
										<span>TikTok</span>
										<div className="sub">@siegfried381</div>
								</a>
								<a href="https://open.spotify.com/user/frazzxh2qdxhvbq24zkirukoy?si=1c26e5e5741e44ad" className="social-btn" target="_blank">
										<span>Spotify</span>
										<div className="sub">@シーグ</div>
								</a>
						</div>
				</section>

				<footer>
						<p>BY SIEGFRIED &copy; 2026</p>
						<p style={{ color: '#222', marginTop: '10px' }}>SYSTEM.OFFLINE</p>
				</footer>
			</main>
    </div>
  );
};
