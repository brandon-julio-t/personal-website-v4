import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import * as React from "react";

// Context for managing selected tab
interface IosMailTabsContextProps {
  value: string;
  setValue: (value: string) => void;
}
const IosMailTabsContext = React.createContext<
  IosMailTabsContextProps | undefined
>(undefined);

/**
 * Custom hook to access IosMailTabs context.
 * Throws if used outside of <IosMailTabs>.
 * @example
 * const { value, setValue } = useIosMailTabs();
 */
export function useIosMailTabs(): IosMailTabsContextProps {
  const ctx = React.useContext(IosMailTabsContext);
  if (!ctx) throw new Error("useIosMailTabs must be used within <IosMailTabs>");
  return ctx;
}

/**
 * Root component for iOS-style tabs.
 * @example
 * <IosMailTabs defaultValue="primary">
 *   <IosMailTabsList>
 *     <IosMailTabsTrigger value="primary" icon={UserRoundIcon} className="bg-sky-600 text-white">
 *       Primary
 *     </IosMailTabsTrigger>
 *   </IosMailTabsList>
 *   <IosMailTabsContent value="primary">Primary content</IosMailTabsContent>
 * </IosMailTabs>
 */
export function IosMailTabs({
  defaultValue,
  value: controlledValue,
  onValueChange,
  children,
  className,
}: {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState(
    defaultValue ?? "",
  );
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;
  const setValue = React.useCallback(
    (v: string) => {
      if (!isControlled) setUncontrolledValue(v);
      onValueChange?.(v);
    },
    [isControlled, onValueChange],
  );

  return (
    <IosMailTabsContext.Provider value={{ value, setValue }}>
      <div className={cn("flex flex-col gap-2", className)}>{children}</div>
    </IosMailTabsContext.Provider>
  );
}

/**
 * List container for iOS-style tab triggers.
 * @example
 * <IosMailTabsList>
 *   <IosMailTabsTrigger value="primary" icon={UserRoundIcon} className="bg-sky-600 text-white">
 *     Primary
 *   </IosMailTabsTrigger>
 * </IosMailTabsList>
 */
export function IosMailTabsList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-1.5 md:flex-row md:justify-center",
        className,
      )}
    >
      {children}
    </div>
  );
}

/**
 * Trigger button for iOS-style tab. Accepts an icon prop and label as children. Consumer controls color via className.
 * @example
 * <IosMailTabsTrigger value="primary" icon={UserRoundIcon} className="bg-sky-600 text-white">
 *   Primary
 * </IosMailTabsTrigger>
 */
export function IosMailTabsTrigger({
  value: triggerValue,
  icon: Icon,
  children,
  className,
}: {
  value: string;
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
}) {
  const { value, setValue } = useIosMailTabs();
  const isSelected = value === triggerValue;

  return (
    <motion.button
      type="button"
      initial={false}
      animate={{
        paddingLeft: isSelected ? "32px" : "16px",
        paddingRight: isSelected ? "32px" : "16px",
      }}
      className={cn(
        "flex h-9 flex-row items-center overflow-hidden rounded-[11px] transition-colors duration-300",
        className,
        !isSelected && "bg-muted text-muted-foreground",
      )}
      onClick={() => setValue(triggerValue)}
      aria-pressed={isSelected}
      tabIndex={0}
    >
      <Icon className="size-4" />
      <AnimatePresence initial={false}>
        {isSelected && (
          <motion.span
            key={triggerValue}
            className="flex items-center gap-2 font-medium whitespace-nowrap"
            initial={{ opacity: 0, width: 0, marginLeft: 0 }}
            animate={{ opacity: 1, width: "auto", marginLeft: 8 }}
            exit={{ opacity: 0, width: 0, marginLeft: 0 }}
          >
            {children}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

/**
 * Content for a specific tab. Only renders if the tab is selected.
 * @example
 * <IosMailTabsContent value="primary">Primary content</IosMailTabsContent>
 */
export function IosMailTabsContent({
  value: contentValue,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { value } = useIosMailTabs();
  if (value !== contentValue) return null;
  return <div className={className}>{children}</div>;
}
