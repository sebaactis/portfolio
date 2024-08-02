import { manrope500 } from "@/utils/fonts"
import { motion } from "framer-motion"

interface CapabilityItemProps {
    capability: string
    icon: JSX.Element
    color: string
}

const CapabilityItem = ({ capability, icon, color }: CapabilityItemProps) => {

    const colorClass = `hover-bg-${color}-700`;

    return (

        <motion.div
            className={`${manrope500.className} border border-gray-600 ${colorClass} hover:border-${colorClass}-700 hover:scale-105 transition duration-300 rounded-full w-max px-2 py-2 md:px-5 md:py-3 font-bold flex gap-2 items-center`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
        >
            <i>{icon}</i>
            <p>{capability}</p>

        </motion.div>
    )
}

export default CapabilityItem