import { manrope500 } from "@/utils/fonts"
import { motion } from "framer-motion"

interface CapabilityItemProps {
    capability: string
}

const CapabilityItem = ({ capability }: CapabilityItemProps) => {
    return (
        <motion.div
            className={`${manrope500.className} border border-gray-600 hover:bg-indigo-500 transition transition-500 rounded-full w-max px-4 py-2 md:px-9 md:py-3 font-bold`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            viewport={{ once: true }}
        >
            {capability}
        </motion.div>
    )
}

export default CapabilityItem