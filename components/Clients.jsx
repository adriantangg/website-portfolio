import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section>
    <h2 className="font-poppins font-semibold text-center xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full px-30">Tech Stack</h2>
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`flex flex-wrap justify-center ${styles.flexCenter} m-10`}>
        {clients.map((client) => (
          <div key={client.id} className="w-[30%] sm:w-[25%] md:w-[20%] flex-1 flex flex-col items-center py-2 px-5">
            <img src={client.logo} alt="client_logo" className="w-4/5 sm:w-full h-auto object-contain" />
            <span className="font-poppin font-semibold text-center text-white mt-2">{client.text}</span>
          </div>
        ))}
      </div>
    </section>
  </section>
);
export default Clients;