import { manrope500 } from "@/utils/fonts"
import { motion } from "framer-motion"

interface CapabilityItemProps {
    capability: string
}

const CapabilityItem = ({ capability }: CapabilityItemProps) => {
    return (
        <motion.div
            className={`${manrope500.className} border border-gray-600 hover:bg-green-700 hover:border-green-700 transition duration-300 rounded-full w-max px-4 py-2 md:px-9 md:py-3 font-bold`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
        >
            {capability}
        </motion.div>
    )
}

export default CapabilityItem