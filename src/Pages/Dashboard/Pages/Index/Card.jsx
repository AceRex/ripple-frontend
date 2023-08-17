const Card = ({ title, Icon, color, IconBgcolor }) => (
  <div className="bg-light p-10 shadow-xl shadow-dark/20 text-center rounded-2xl">
    <div className={`bg-${IconBgcolor} p-4 rounded-2xl w-[60%] m-auto mb-4`}>
      <Icon className={`text-${color} text-3xl  text-center`} />
    </div>
    <p className="text-dark font-body text-md">{title}</p>
  </div>
);
export default Card;
