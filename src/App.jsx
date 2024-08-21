import Alert from "./components/Alert";
import Badge from "./components/Badge";
import Button from "./components/button";
import Card from "./components/Card";
import {
  MdInfoOutline,
  MdWarningAmber,
  MdBackHand,
  MdLocalPhone,
} from "react-icons/md";

export default function App() {
  const primary = {
    color: "primary-800",
    accent: "primary-50",
    border: "primary-500",
    size: "w-32 text-lg",
  };
  const secondary = {
    color: "secondary-50",
    accent: "secondary-800",
    border: "secondary-900",
    size: "w-24 text-xs",
  };

  return (
    <div className="flex flex-col align-middle items-center gap-2">
      <h2 className="text-xl font-bold">Buttons</h2>
      <section className="flex gap-2">
        <Button
          color={primary.color}
          accent={primary.accent}
          content="Button 1"
          border={primary.border}
          size={primary.size}
          disabled={false}
          url="https://chasacademy.se/"
        />
        <Button
          color={secondary.color}
          accent={secondary.accent}
          content="Button 2"
          border={secondary.border}
          size={secondary.size}
          disabled={false}
          url="https://www.google.com/"
        />
        <Button
          color={primary.color}
          accent={primary.accent}
          content="Button Disabeled"
          border={primary.border}
          size={secondary.size}
          disabled={true}
          url=""
        />
      </section>
      <h2 className="text-xl font-bold">Alerts</h2>

      <section className="flex gap-2">
        <Alert
          color="slate-50"
          accent="orange-500"
          warning="Wait!"
          content="Test me if you want to enter another website,"
          icon={<MdBackHand />}
        />
        <Alert
          color={primary.color}
          accent="slate-200"
          warning="Info!"
          content="Huseyin is a student in Chas Academy."
          icon={<MdInfoOutline />}
        />
        <Alert
          color={primary.accent}
          accent={secondary.accent}
          warning="Warning!"
          content="There are misleading messages."
          icon={<MdWarningAmber />}
        />
      </section>
      <h2 className="text-xl font-bold">Badges</h2>

      <section className="flex gap-2">
        <Badge
          color={primary.accent}
          accent={primary.color}
          size="xs"
          content="Default"
          icon={<MdInfoOutline />}
        />
        <Badge
          color={secondary.accent}
          accent="slate-200"
          size="sm"
          content="Unusual"
          icon={<MdWarningAmber />}
        />
        <Badge
          color="orange-800"
          accent="orange-200"
          size="xs"
          content="Alone"
          icon=""
        />
      </section>

      <h2 className="text-xl font-bold">Cards</h2>

      <section className="flex gap-2">
        <Card
          accent="slate-50"
          href="#"
          imgAlt="Restaurant interior"
          imgSrc="src/assets/interior.png"
          children={
            <div className="p-2 gap-2">
              <Badge
                color={primary.accent}
                accent={primary.color}
                size="xs"
                content="Phone: +99 909 90 90"
                icon={<MdLocalPhone />}
              />
              <h2 className="font-bold text-lg">About us</h2>
              <p>We are a family owned restaurant.</p>
              <p>
                Neque fuga voluptas sequi ratione, quo sit, culpa nemo itaque
                repudiandae porro impedit doloremque illo. Quos ea nulla
                provident. Molestiae, consectetur a.
              </p>
              <div className="flex justify-end mt-2">
                <Button
                  color={primary.color}
                  accent={primary.accent}
                  content="Learn more"
                  border={primary.border}
                  size={secondary.size}
                  disabled={false}
                  url="#"
                />
              </div>
            </div>
          }
        />
        <Card
          accent="slate-50"
          href="#"
          imgAlt="New York exterior"
          imgSrc="src/assets/exterior.png"
          children={
            <div className="p-2 gap-2">
              <h2 className="font-bold text-lg">How it started</h2>
              <p>It was 2000 and we had just moved to the capital of Sweden.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                veritatis ipsam quisquam, minima esse cumque quo fugit a. Vero
                atque est quisquam numquam harum similique commodi ducimus ad
                asperiores enim.
              </p>
              <div className="flex justify-end mt-2">
                <Button
                  color={primary.color}
                  accent={primary.accent}
                  content="Learn more"
                  border={primary.border}
                  size={secondary.size}
                  disabled={false}
                  url="#"
                />
              </div>
            </div>
          }
        />
      </section>
    </div>
  );
}
