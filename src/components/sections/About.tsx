import { Code , Smartphone, Palette, Zap, Accessibility} from "lucide-react";
import type React from "react";

const About: React.FC = () => {
	const passions = [
	{
		icon: <Smartphone className="w-6 h-6 text-blue-400" />,
		title: "Responsive Design",
		description: "Ensuring seamless experiences across desktops, tablets, and mobile devices.",
	},
	{
		icon: <Palette className="w-6 h-6 text-purple-400" />,
		title: "UI Implementation",
		description: "Translating Figma and design concepts into pixel-perfect interfaces.",
	},
	{
		icon: <Zap className="w-6 h-6 text-yellow-400" />,
		title: "Performance Optimization",
		description: "Improving load times and smooth interactions for better user engagement.",
	},
	{
		icon: <Accessibility className="w-6 h-6 text-green-400" />,
		title: "Accessibility",
		description: "Building inclusive web apps that everyone can navigate with ease.",
	},
];

	return (
		<section id="about" className="py-20 bg-slate-900/50">
			<div className="container mx-auto px-6">
				{/* Heading */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
						About Me
					</h2>
					<p className="text-xl text-slate-300 max-w-3xl mx-auto">
						I’m a frontend enthusiast passionate about bringing
						designs to life. I thrive on turning ideas into elegant,
						pixel-perfect, and user-friendly web applications.
					</p>
				</div>

				{/* Content */}
				<div className="grid md:grid-cols-2 gap-12 items-center">
					{/* Left visual card */}
					<div>
						<div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
							<div className="text-center">
								<Code className="w-24 h-24 mx-auto mb-4 text-blue-400" />
								<p className="text-slate-300">Frontend Enthusiast</p>
							</div>
						</div>
					</div>

					{/* Right text + passions */}
					<div className="space-y-6">
						<p className="text-lg text-slate-300 leading-relaxed">
							My joy is in transforming static Figma mockups into
							functional websites that not only look great but
							also provide seamless user experiences. With every
							project, I aim for clean, scalable code and
							interfaces that feel intuitive.
						</p>

						<div className="grid grid-cols-2 gap-4 mt-8">
							{passions.map((passion, index) => (
								<div
									key={index}
									className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg"
								>
									<div className="text-blue-400">{passion.icon}</div>
									<div>
										<h4 className="font-semibold text-sm">
											{passion.title}
										</h4>
										<p className="text-xs text-slate-400">
											{passion.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;




