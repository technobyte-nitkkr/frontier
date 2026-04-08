interface NotificationItemProps {
  title: string;
  content?: string;
}

const NotificationItem = ({ title, content }: NotificationItemProps) => {
  return (
    <div className="bg-white/5 border border-white/10 hover:border-white/20 transition-all p-3 rounded-lg">
      <p className="text-[#8b919e] font-mono text-sm md:text-base tracking-tight leading-snug">
        {" "}
        {">>"} {title}{" "}
      </p>
    </div>
  );
};

export default NotificationItem;
