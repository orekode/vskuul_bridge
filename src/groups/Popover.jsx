import { Button } from "@/components/ui/button"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function UserPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Button variant="outline">View</Button>
        <Button variant="outline">Edit</Button>
        <Button variant="outline">Verify</Button>
        <Button variant="outline">Block</Button>
      </PopoverContent>
    </Popover>
  )
}
