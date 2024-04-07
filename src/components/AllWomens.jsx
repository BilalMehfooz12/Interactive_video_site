import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";
import { AnimatePresence, motion } from "framer-motion";

function AllWomens() {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.selectedWomensData.length > 0 && (
        <motion.div
          initial={{
            opacity: 0,
            transition: { duration: 0.8 },
          }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, delay: 4 },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5 },
          }}
          className="allwomens"
        >
          {snap.selectedWomensData
            .filter((item) => item["Photo URL"] != "")
            .map((item) => {
              console.log(item["Photo URL"]);
              return (
                <>
                  <img
                    onClick={() => (state.selectedWomen = item)}
                    className="bioshortimg"
                    src={`./assets/bubbles/${item["Photo URL"]}`}
                    alt=""
                  />
                </>
              );
            })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AllWomens;
