import "../../index.css";
import "./styles.css";
interface ChipsProps {
    readonly children: string | undefined;
}
export function Chips({ children }: ChipsProps) {
    return (
        <div className="containerChip body-2">
            <p>{children}</p>
        </div>
    );
}
