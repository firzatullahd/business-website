export const pageAnimation = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.25,
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 2
        }
    }
}

export const titleAnimation = {
    hidden: {
        y: 300
    },
    show: {
        y: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut"
        }
    }
}

export const fade = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    },
}

export const photoAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2, ease: "easeOut" } }
}

export const lineAnimation = {
    hidden: { width: '0%' },
    show: { width: '100%', transition: { duration: 1, ease: "easeOut" } }
}

export const slider = {
    hidden: { x: '-130%' },
    show: { x: '100%', transition: { duration: 0.75, ease: "easeOut" } }
}