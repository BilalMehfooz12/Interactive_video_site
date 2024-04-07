import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";

function SingleTimeline() {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.selectedWomen && (
        <motion.div className="opentimeline">
          <motion.div
            initial={{
              x: 0,
              y: 0,
              scale: 0,
              transition: { type: "spring", duration: 0.8 },
            }}
            animate={{
              x: 0,
              y: 0,
              scale: 1,
              transition: { type: "spring", duration: 1.5, delay: 0.5 },
            }}
            exit={{
              x: 0,
              y: 0,
              scale: 0,
            }}
          >
            <motion.img
              className="opentimelineimage"
              src={`./assets/biofull/${snap.selectedWomen["Bio Photo URL"]}`}
            />
          </motion.div>

          {snap.selectedWomen["Video URL"] != "" ? (
            <motion.div
              className={`playbtn ${snap.videoOn && "active"}`}
              onClick={() => console.log(snap.selectedWomen["Video URL"])}
            >
              <motion.div className="playbtncont" whileTap={{ scale: 0.9 }}>
                {!snap.videoOn ? (
                  <>
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 100,
                        transition: { type: "spring", duration: 0.8 },
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          type: "spring",
                          duration: 0.8,
                          delay: 0.5,
                        },
                      }}
                      exit={{
                        opacity: 0,
                        y: 100,
                      }}
                    >
                      <div
                        className="closebtn"
                        onClick={() => {
                          state.selectedWomen = null;
                          state.videoOn = false;
                        }}
                      >
                        CLOSE
                      </div>
                    </motion.div>
                    <motion.span
                      initial={{
                        opacity: 0,
                        transition: { type: "spring", duration: 0.8 },
                      }}
                      animate={{
                        opacity: 1,
                        transition: {
                          type: "spring",
                          duration: 1.5,
                          delay: 0.5,
                        },
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      className="videobtn"
                      onClick={() => (state.videoOn = !state.videoOn)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                      </svg>
                      <p>Play Video</p>
                    </motion.span>
                  </>
                ) : (
                  <motion.span
                    initial={{
                      opacity: 0,
                      transition: { type: "spring", duration: 0.8 },
                    }}
                    animate={{
                      opacity: 1,
                      transition: {
                        type: "spring",
                        duration: 1.5,
                        delay: 0.5,
                      },
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    className="videobtn close"
                    onClick={() => (state.videoOn = !state.videoOn)}
                  >
                    <p>Close Video</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                  </motion.span>
                )}
                {snap.selectedWomen && snap.videoOn && (
                  <motion.video
                    initial={{
                      scale: 0,
                      transition: { type: "spring", duration: 0.8 },
                    }}
                    animate={{
                      scale: 1,
                      transition: {
                        type: "spring",
                        duration: 0.5,
                      },
                    }}
                    exit={{
                      scale: 0,
                    }}
                    controls
                    autoPlay
                    src={`./assets/biovid/${snap.selectedWomen["Video URL"]}`}
                  />
                )}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
                transition: { type: "spring", duration: 0.8 },
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  duration: 0.8,
                  delay: 0.5,
                },
              }}
              exit={{
                opacity: 0,
                y: 100,
              }}
            >
              <div
                className="closebtn"
                onClick={() => {
                  state.selectedWomen = null;
                  state.videoOn = false;
                }}
              >
                CLOSE
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SingleTimeline;
