attribute float aIntensity;
attribute float aAngle;

uniform vec2 uResolution;
uniform sampler2D uImageTexture;
uniform sampler2D uDisplacementTexture;


varying vec3 vColor;
void main()
{

    // displacement
    vec3 newPosition = position;

    float displacementIntensity = texture(uDisplacementTexture, uv).r;
    displacementIntensity = smoothstep(0.1, 0.3, displacementIntensity);

    vec3 displacement = vec3(cos(aAngle) * .2, sin(aAngle) * .2, 1.0);

    displacement = normalize(displacement);
    displacement *= displacementIntensity;
    displacement *= 3.0;
    displacement *= aIntensity;

    newPosition += displacement;

    // Final position
    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    // Image
    float imageIntensity = texture(uImageTexture, uv).r;

    // Point size
    gl_PointSize = 0.16 * imageIntensity * uResolution.y;
    gl_PointSize *= (1.0 / - viewPosition.z);

    // varyings
    vColor = vec3(pow(imageIntensity, 2.0));
}